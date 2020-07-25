import React from "react";
import Layout from "@theme/Layout";
import styles from "./onboarding.module.css";

function Onboarding() {
	return (
		<Layout
			title={`Let's get you onboard`}
			description="Setup live streaming in minutes"
		>
			<div className={styles.onboardingFormContainer}>
				<iframe
					className={styles.onboardingForm}
					src="https://docs.google.com/forms/d/e/1FAIpQLSfCg9C7FGJk7hv8m5BfJTTfhdlF8QslCytZ47Ro2ZVPO2wGiQ/viewform?embedded=true"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				/>
			</div>
		</Layout>
	);
}

export default Onboarding;
