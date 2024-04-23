import type { StringElement } from '../../component';
import { createSnapComponent } from '../../component';

/**
 * The props of the {@link Italic} component.
 *
 * @property children - The text to display in italic. This should be a string
 * or an array of strings.
 */
export type ItalicProps = {
  children: StringElement;
};

const TYPE = 'Italic';

/**
 * An italic component, which is used to display text in italic. This componen
 * can only be used as a child of the {@link Text} component.
 *
 * @param props - The props of the component.
 * @param props.children - The text to display in italic. This should be a
 * string or an array of strings.
 * @returns An italic element.
 * @example
 * <Text>
 *   Hello <Italic>world</Italic>!
 * </Text>
 */
export const Italic = createSnapComponent<ItalicProps, typeof TYPE>(TYPE);

/**
 * An italic element.
 *
 * @see Italic
 */
export type ItalicElement = ReturnType<typeof Italic>;
