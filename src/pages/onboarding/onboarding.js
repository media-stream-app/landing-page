import React from "react";
import Layout from "@theme/Layout";
import styles from "./onboarding.module.css";

function Onboarding() {
	function onboardUser(event) {
		const userPayload = Object.fromEntries(new FormData(event.target));
		debugger;
	}
	return (
		<Layout
			title={`Let's get you onboard`}
			description="Setup live streaming in minutes"
		>
			<section className={styles.onboardingContainer}>
				<h1>Media Stream App</h1>
				<span>Convey your interest & we will get back to you in a jiffy</span>
				<form className={styles.onboardingForm} onSubmit={onboardUser}>
					<label htmlFor="name">What do we call you?</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Please enter your legal name"
						required
					/>

					<label htmlFor="email">How can we reach you out ?</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Please enter your email address"
						required
					/>

					<label htmlFor="company">Are you registered with a company ?</label>
					<input
						type="text"
						name="company"
						id="company"
						placeholder="Please enter your company name (if any)"
					/>

					<label htmlFor="timeline">
						How soon are you planning to get your solution out ?
					</label>
					<input
						type="text"
						name="timeline"
						id="timeline"
						placeholder="Estimated timeline... 1day ? 1week"
						required
					/>

					<label htmlFor="preferred-username">
						Do you have a preferred username in mind ?
					</label>
					<input
						type="text"
						name="preferred-username"
						id="preferred-username"
						placeholder=""
					/>

					<label htmlFor="dob">Date of birth</label>
					<input
						type="date"
						name="dob"
						id="dob"
						placeholder="Enter DOB, select a valid date from the date picker"
						required
					/>

					<div className={styles.terms}>
						<input
							type="checkbox"
							name="terms"
							id="terms"
							value="agreed"
							required
						/>
						<label htmlFor="terms">
							By submitting this form you accept the terms and conditions listed
							in
							<a href="https://media-stream.app/terms">
								https://media-stream.app/terms
							</a>
						</label>
					</div>

					<input type="submit" value="Get me onboard" />
				</form>
			</section>
		</Layout>
	);
}

export default Onboarding;
