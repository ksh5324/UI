/// <reference types="react" />
import "./item.css";
import PropTypes from "prop-types";
declare const Item: {
    ({ type, title, description, tag, good, children, checked, score, }: any): JSX.Element;
    propTypes: {
        type: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        description: PropTypes.Requireable<string>;
        tag: PropTypes.Requireable<(string | null | undefined)[]>;
        good: PropTypes.Requireable<number>;
        children: PropTypes.Requireable<any>;
        checked: PropTypes.Requireable<boolean>;
        score: PropTypes.Requireable<number>;
    };
    defaultProps: {
        type: string;
        title: string;
        description: string;
        checked: boolean;
    };
};
export default Item;
