import * as React from "react";

const styles = {
  about: {
    paddingTop: "3em",
    display: "grid",
    justifyContent: "center",
  },
  title: {
    paddingTop: "50px",
    paddingBottom: "30px",
    textAlign: "center" as TODO,
    fontSize: "36px"
  },
  version: {
    display: "flex",
    justifyContent: "center" as TODO ,
    fontSize: "24px",
    color: "darkcyan",
  },
  desc: {
    padding: "0px 50px",
    fontSize: "20px"
  }
}


const AboutPage: React.FC = () => {
    return (
      <div style={styles.about}>
        <div style={styles.title}><b>О</b></div>
        <div style={styles.version}>Реклама</div>
        <div style={styles.desc}>
          <p>Это приложение для управления рекламой и любого бизнес-стартапа.</p>
        </div>
      </div>
    );
  }


export default AboutPage;
