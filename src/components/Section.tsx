import React, { ReactNode } from "react"

type SectionProps = {
	title?: string,
	children: ReactNode
}

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
	return (
		<Section>
			<h2></h2>
			<p>	</p>
		</Section>
	)
}