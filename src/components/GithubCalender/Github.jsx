import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import styles from "./GitHub.module.css"
const Calendery = () => {
  return (
    <div className={styles.githubDiv}>
      <h1>GitHub Calender</h1>
      <GitHubCalendar
        username="deepak65190"
        blockSize={15}
        fontSize={15}
        style={{ margin: "auto", marginTop: "80px" }}
      ></GitHubCalendar>
      <ReactTooltip delayShow={20} html />
    </div>
  );
};
export default Calendery;
