import React, {createContext, useCallback, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import defaultConfig from './defaultConfig';

const SidebarContext = createContext();
const SidebarActionsContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const useSidebarActionsContext = () => useContext(SidebarActionsContext);

const SidebarContextProvider = ({children}) => {
  const [menuStyle, updateMenuStyle] = useState(
    defaultConfig.sidebar.menuStyle,
  );
  const [sidebarColorSet, updateSidebarColorSet] = useState(
    defaultConfig.sidebar.colorSet,
  );
  const [isSidebarBgImage, updateImage] = useState(
    defaultConfig.sidebar.isSidebarBgImage,
  );
  const [sidebarBgImage, setSidebarImage] = useState(
    defaultConfig.sidebar.sidebarBgImage,
  );

  const setSidebarBgImage = useCallback((isSidebarBgImage) => {
    updateImage(isSidebarBgImage);
  }, []);

  const updateSidebarBgImage = useCallback((sidebarBgImage) => {
    setSidebarImage(sidebarBgImage);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        ...sidebarColorSet,
        menuStyle,
        isSidebarBgImage,
        sidebarBgImage,
        borderColor: defaultConfig.sidebar.borderColor,
      }}
    >
      <SidebarActionsContext.Provider
        value={{
          updateMenuStyle,
          updateSidebarColorSet,
          setSidebarBgImage,
          updateSidebarBgImage,
        }}
      >
        {children}
      </SidebarActionsContext.Provider>
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
