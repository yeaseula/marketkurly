
export const ListItem = (props) => {
    return (
        <div>
            <div className="list-item-container">
                <div className="list-item">
                    {props.title}
                </div>
            </div>
        </div>
    )
}