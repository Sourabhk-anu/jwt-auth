import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Student Attendance System</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				<input type="text" placeholder="Enter Student Id" value=""/>
			</nav>
		</div>
	);
};

export default Main;