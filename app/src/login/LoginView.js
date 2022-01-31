export const LoginView = ({ login }) => {
    const onSubmit = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        login(evt.target.user.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <input name="user" />
            <button type="submit">login</button>
        </form>
    );
};
