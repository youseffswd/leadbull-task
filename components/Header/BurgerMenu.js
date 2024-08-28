const BurgerMenu = ({ onClick, open }) => {
    const clickHandler = () => {
        onClick(prev => !prev);
    };
   
    /* Style in globals css file */
    return (
        <div className={`menu-btn ${open && "open"}`} onClick={clickHandler}>
            <div className="menu-btn__burger"></div>
        </div>
    );
};

export default BurgerMenu;