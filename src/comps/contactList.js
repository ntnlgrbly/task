export default function UserList({ contacts }) {



    return (
        <div>
            {contacts.map((contact) => (
                <div className="card container" key={contact.title}>



                    <img src={contact.image1} />
                    <div className="h5_ctegory">{contact.categoryName}</div>
                    {/* <img src={contact.image2} /> */}
                    <h4>{contact.title}</h4>
                    <div>{contact.SecendTitle}</div>
                    <div className="name">{contact.name}</div>
                </div>
            ))}

        </div>
    );
}