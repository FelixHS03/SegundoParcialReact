import Counter from '../components/Counter.jsx';
import InfoCard from '../components/InfoCard.jsx';
import ThemeStatus from '../components/ThemeStatus.jsx';
import VisibilityToggle from '../components/VisibilityToggle.jsx';

function Home({ isDark, toggleTheme }) {
    return (
        <>
            <section className="section-grid">
                <InfoCard
                    title="Landing Page"
                    description="Esta página principal funciona como landing page y presenta el objetivo del proyecto."
                >
                    <ul>
                        <li>React con sintaxis JSX</li>
                        <li>Componentes reutilizables</li>
                        <li>Estilos CSS personalizados</li>
                    </ul>
                </InfoCard>

                <InfoCard
                    title="Props y children"
                    description="Este componente recibe props desde el padre y además renderiza children."
                >
                    <p>
                        Aquí se demuestra la comunicación padre a hijo, tal como pide la evaluación.
                    </p>
                </InfoCard>
            </section>

            <section className="section-grid three-columns">
                <Counter />
                <ThemeStatus isDark={isDark} toggleTheme={toggleTheme} />
                <VisibilityToggle />
            </section>
        </>
    );
}

export default Home;