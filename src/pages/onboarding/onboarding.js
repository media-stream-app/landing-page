import React from "react";
import Layout from "@theme/Layout";
import styles from "./onboarding.module.css";

function Onboarding() {
	const [uuid, setUuid] = React.useState(null);

	React.useEffect(() => {
		fetch("https://mock-faker-server.herokuapp.com/fake/random/uuid")
			.then((response) => response.json())
			.then(({ data }) => setUuid(data));
	}, []);

	function onboardUser(event) {
		event.preventDefault();
		let userPayload = Object.fromEntries(new FormData(event.target));
		userPayload.hostname = new URL(userPayload.hostname).hostname;
		userPayload.id = uuid;
		fetch("https://api.media-stream.app/channel", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userPayload),
		})
			.then((response) => response.json())
			.then(({ status }) => {
				if (status === 201)
					alert(
						"Your interest is recorded, expect to hear back from us in 24hrs!"
					);
				else alert("Something went wrong!");
			});
	}

	return (
		<Layout
			title={`Let's get you onboard`}
			description="Setup live streaming in minutes"
		>
			<section className={styles.onboardingContainer}>
				<div className={styles.headerGroup}>
					<h1>Media Stream App</h1>
					<span>Convey your interest & we will get back to you in a jiffy</span>
				</div>
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

					<label htmlFor="hostname">
						Where are you planning to host the stream solution ?
					</label>
					<input
						type="url"
						name="hostname"
						id="hostname"
						placeholder="SSL enabled Domain name here, example.com, www.example.com, subdomain.example.com"
						required
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

					<label htmlFor="username">
						Do you have a preferred username in mind ?
					</label>
					<input type="text" name="username" id="username" placeholder="" />

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
							value="accepted-terms"
							required
						/>
						<label htmlFor="terms">
							By submitting this form you accept the terms and conditions listed
							in{" "}
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
