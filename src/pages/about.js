import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About FuReSH II">
            <p>Mitte Februar 2022 startete das DFG-geförderte Projekt Future e-Research Support in the Humanities (FuReSH) in die zweite Phase. Auf die Konzeptstudie der ersten Projektphase aufbauend wird in den nächsten drei Jahren ein prototypischer Scholarly Makerspace als physischer und virtueller Raum an der Universitätsbibliothek der Humboldt-Universität zu Berlin implementiert. Mit im Boot sind die Lehrstühle für Digital History am Institut für Geschichtswissenschaften und für Information Processing and Analytics am Institut für Bibliotheks- und Informationswissenschaften.</p>
            <h2>Kontakt</h2>
        </Layout>
    )
}

export const Head = () => <title>About FuReSH II</title>

export default AboutPage