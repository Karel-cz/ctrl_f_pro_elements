import PropTypes from "prop-types";

export const baseProps = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    tooltip: PropTypes.string,
    pressed: PropTypes.bool,
    style: PropTypes.object,
};

export const buttonProps = {
    ...baseProps,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    borderRadius: PropTypes.oneOf(["none", "small", "medium", "large"]),
    icon: PropTypes.node,
    iconRight: PropTypes.node,
    animeIcon: PropTypes.node,
    animeIconRight: PropTypes.node,
    width: PropTypes.string,
    label: PropTypes.string,
};


export const tabsProps = {
    ...baseProps,
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            label: PropTypes.string,
            icon: PropTypes.node,
            children: PropTypes.node,
            onClick: PropTypes.func,
            style: PropTypes.object,
        })
    ),
    activeCode: PropTypes.string,
    onChange: PropTypes.func,
    contentMaxHeight: PropTypes.string,
};
