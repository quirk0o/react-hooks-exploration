import React, {
  createContext,
  useRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useState
} from "react";
import {
  equals,
  zipObj,
  mapObjIndexed,
  toPairs,
  values,
  fromPairs,
  pipe,
  keys,
  map,
  adjust,
  join
} from "ramda";
import uuid from "uuid/v4";

export const ThemeContext = createContext({});
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useStyles = styleFactory => {
  const [classes, setClasses] = useState({});
  const theme = useTheme();
  const stylesRef = useRef();
  const stylesheetRef = useRef();

  useEffect(() => {
    if (!stylesheetRef.current) {
      stylesheetRef.current = document.createElement("style");
    }
  }, []);

  useLayoutEffect(() => {
    const stylesObj = styleFactory(theme);
    if (equals(stylesObj, stylesRef.current)) return;

    const stylesheet = stylesheetRef.current;

    const classes = pipe(mapObjIndexed((_, key) => `${uuid()}-${key}`))(
      stylesObj
    );
    setClasses(classes);

    const createStyle = styleObj =>
      pipe(
        toPairs,
        map(
          adjust(0, key =>
            key
              .split(/(?=[A-Z])/)
              .join("_")
              .toLowerCase()
          )
        ),
        map(([key, value]) => `${key}: value`),
        join(";")
      )(styleObj);

    for (let key in classes) {
      stylesheet.insertRule(
        `.${classes[key]} { ${createStyle(stylesObj[key])} }`
      );
    }
    stylesheet.appendChild(document.createTextNode(""));
    document.head.appendChild(stylesheet);

    return () => document.removeChild(stylesheet);
  });

  useEffect(() => {
    stylesRef.current = styleFactory(theme);
  });
};
