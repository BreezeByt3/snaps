export type Key = string | number;

/**
 * A JSX element.
 *
 * @property type - The type of the element.
 * @property props - The props of the element.
 * @property key - The key of the element.
 */
export type SnapElement<Props = any, Type extends string = string> = {
  type: Type;
  props: Props;
  key: Key | null;
};

/**
 * A nested type, which can be a type or an array of nested types.
 *
 * @template Type - The type that can be nested.
 * @example
 * type NestedString = Nested<string>;
 * const nestedString: NestedString = 'hello';
 * const nestedStringArray: NestedString = ['hello', 'world'];
 * const nestedStringNestedArray: NestedString = ['hello', ['world']];
 */
export type Nested<Type> = Type | Nested<Type>[];

/**
 * A JSX node, which can be an element, a string, null, or an array of nodes.
 */
export type SnapNode = Nested<SnapElement | string | null>;

/**
 * A JSX string element, which can be a string or a (nested) array of strings.
 */
export type StringElement = Nested<string>;

/**
 * A JSX component.
 */
export type SnapComponent<
  Props = Record<string, never>,
  Type extends string = string,
> = (props: Props & { key?: Key | null }) => SnapElement<Props, Type>;

/**
 * Create a Snap component from a type. This is a helper function that creates a
 * Snap component function.
 *
 * @param type - The type of the component.
 * @returns A function that creates a Snap element.
 * @see SnapComponent
 */
export function createSnapComponent<Props, Type extends string>(
  type: Type,
): SnapComponent<Props, Type> {
  return (props: Props & { key?: Key | null }) => {
    const { key = null, ...rest } = props;
    return {
      type,
      props: rest as Props,
      key,
    };
  };
}
