import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

/**
 * Sets up snapshot tests in a standard way
 */
export const snapshotTestFactory = (Component, props = {}) => {
  /**
   * Re-usable it block
   */
  const itb = (p) => {
    it('should match snapshot', () => {
      const tree = renderer.create(<Component {...p} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  };
  describe(`${Component.name}`, () => {
    /**
     * Clean up any mock functions that might be in props
     */
    afterEach(() => {
      jest.clearAllMocks();
    });

    /**
     * If it's an array of props then iterate them into separate it blocks
     */
    if (Array.isArray(props)) {
      props.forEach((p) => {
        itb(p);
      });
    } else {
      itb(props);
    }
  });

  return this;
};
