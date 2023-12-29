/**
 * @param text string
 * @returns string
 */
// eslint-disable-next-line import/prefer-default-export
export const extractNumbers = (text: string) => text.replace(/[^0-9]/g, '');
