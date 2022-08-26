import { createContext, useContext, useReducer } from 'react';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// The Vision UI Dashboard  Material main context
const VisionUI = createContext();

// Setting custom name for the context which is visible on react dev tools
VisionUI.displayName = 'ActionContext';

// Vision UI Dashboard React reducer
function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_CREATE_GALLERA': {
      return { ...state, openCreateGallera: action.value };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Vision UI Dashboard React context provider
function ActionControllerProvider({ children }) {
  const initialState = {
    openCreateGallera: true,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  return <VisionUI.Provider value={[controller, dispatch]}>{children}</VisionUI.Provider>;
}

// Vision UI Dashboard React custom hook for using context
function useActionController() {
  const context = useContext(VisionUI);

  if (!context) {
    throw new Error('useVisionUIController should be used inside the VisionUIControllerProvider.');
  }

  return context;
}

// Typechecking props for the VisionUIControllerProvider
ActionControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setOpenCreateGallera = (dispatch, value) => dispatch({ type: 'OPEN_CREATE_GALLERA', value });

export { useActionController, ActionControllerProvider, setOpenCreateGallera };
