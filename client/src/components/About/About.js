import Container from 'react-bootstrap/Container'
import "./About.css"

function About() {
    return (
        <div className="aboutpage">
            <Container style={{ color: "black" }}>
                <div class="card-deck">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Casey</h5>
                            <p class="card-text">Beginning a new journey with Software Development.</p>
                            <a href="https://github.com/wrxbeauty" class="btn btn-primary">My Link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Nick</h5>
                            <p class="card-text">...</p>
                            <a href="https://github.com/nawright16" class="btn btn-primary">My Link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Gregg</h5>
                            <p class="card-text">...</p>
                            <a href="https://github.com/GreggLedoux" class="btn btn-primary">My Link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Kristen</h5>
                            <p class="card-text">...</p>
                            <a href="https://github.com/Krisvong" class="btn btn-primary">My Link</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;