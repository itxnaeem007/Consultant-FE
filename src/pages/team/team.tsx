import React, { useState } from 'react';
import JohnImage from './../../shared/_next/static/images/team-img1-be952ec331bf46c7bc0a382f06517a86.jpg';
import { getTeamService } from './../../services/team.service';
import FloatingStyle from '../../shared/floatingStyle';

function TeamScreen() {

    const [teamList, setTeamList] = useState<any>([])

    React.useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getTeamService();
                setTeamList(response.data.results)
            } catch (error) {

            }
        }
        fetchBlog()
    }, [])

    return (
        <div >
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Our Team</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="team-area ptb-100">
                <div className="container">
                    <div className="row">
                        {teamList && teamList.map((member: any, index: number) => {
                            return (
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div className="single-team-member"><img src={JohnImage} alt="team" />
                                        <div className="team-content">
                                            <h3>{member.name}</h3><span>{member.designation}</span>
                                            <ul>
                                                <li><a href="!#"><i className="icofont-facebook"></i></a></li>
                                                <li><a href="!#"><i className="icofont-instagram"></i></a></li>
                                                <li><a href="!#"><i className="icofont-twitter"></i></a></li>
                                                <li><a href="!#"><i className="icofont-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </div>
    );
}

export default TeamScreen;