import React from "react";
import Layout from "@theme/Layout";
import styles from "./terms.module.css";

function Terms() {
  return (
    <Layout
      title={"Terms and Conditions"}
      description="Setup live streaming in minutes"
    >
      <section className={styles.termsContainer}>
        <div className={styles.termsPage}>
          <h3> Terms and Conditions</h3>

          <ol>
            <strong> Onboarding Terms </strong>

            <li>
              You permit us to create & manage a randomized twitch account.
            </li>
            <li>
              You accept all{" "}
              <a href="https://www.twitch.tv/p/legal/terms-of-service/">
                the terms and conditions of twitch platform.
              </a>
            </li>
          </ol>

          <ol>
            <strong> Service Terms </strong>
            <li>
              Expect to hear back from us in 24 hrs through emails only & 20
              minute google meet session is possible for paying customers only.
              (We are working professionals and this is our hobby project)
            </li>
            <li> Participation in on-site operations is not possible.</li>
            <li> On demand support cannot be catered at the moment.</li>
            <li>
              Regarding pricing:
              <ol>
                <li>Pricing details shared are final and non-negotiable.</li>
                <li> Due dates cannot be moved.</li>
                <li>Trial periods cannot be extended.</li>
              </ol>
            </li>
            <li>
              We do not give full or partial refunds for subscriptions that you
              have purchased regardless of the basis for the refund request.
            </li>
            <li>
              The twitch and footer are part of the application solution and
              cannot be removed.
            </li>
          </ol>
          <p className={styles.lastUpdatedText}>
            <i>Last updated on 28th July, 2020</i>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default Terms;
