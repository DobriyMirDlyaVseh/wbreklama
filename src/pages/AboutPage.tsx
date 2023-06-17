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
        <div style={styles.title}><b>About</b></div>
        <div style={styles.version}>WbReklama</div>
        <div style={styles.desc}>
          <p>This is an application for the personal account of advertising management for Wildberries.
           </p>
        </div>
      </div>
    );
  }


export default AboutPage;
