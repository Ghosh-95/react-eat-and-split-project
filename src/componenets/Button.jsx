export default function Button({ children, onClick, style }) {
    return <button className="button" style={style} onClick={onClick}>{children}</button>
};