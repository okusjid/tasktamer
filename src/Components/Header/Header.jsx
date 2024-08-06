import './Header.css'
const Header = () => {
    return(
    <nav className='header'>
        <div className="title">TaskTamer</div>
        <div className="options">
            <button>Create Task</button>
            <button>View Tasks</button>
        </div>
    </nav>
    )
}

export default Header;