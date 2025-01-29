import {ListItem} from './Listitem.jsx';

export const List = ({ filteredList }) => {
    return (
        <div className="list-container">
            {filteredList.map((it) => {
                return <ListItem key={it.id} {...it} />;
            })}
        </div>
    );
};