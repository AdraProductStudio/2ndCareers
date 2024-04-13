import React from "react";
import CardWithImage from "../../components/Cards/CardWithImage";
import { FaDownload } from "react-icons/fa";

import Image from '../../utils/images.js'
import DashboardNavbar from "../../components/Navbar/DashboardNavbar.jsx";


const LearningPage = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']
    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <div className="learning-page-height learning-page-bg overflow-scroll">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-0 mb-4">
                        <div className="col">
                            <CardWithImage cardImage={Image.learningImage}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color"
                                modalContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, amet perferendis! Aliquid dignissimos sed hic ex eos, nesciunt provident illo impedit quidem exercitationem saepe? Beatae exercitationem soluta recusandae explicabo commodi iure consequatur est. Dolorum quam ratione mollitia labore temporibus cumque, tempore saepe esse, distinctio architecto rem illum error accusamus, ipsum repellat exercitationem provident dolore sint. Consequuntur, odit minus. Perferendis commodi nisi excepturi delectus beatae veniam animi rerum? Dolorum blanditiis placeat tenetur, eveniet temporibus similique sapiente nemo, a hic, nobis suscipit cum autem quisquam eligendi porro modi. Numquam, aperiam! Veritatis fugiat consectetur deleniti eveniet alias expedita cum delectus quam hic quaerat voluptate voluptas atque commodi aspernatur repudiandae ea dolorem, necessitatibus doloribus, corporis perspiciatis tenetur iste? Esse libero quam recusandae quas ad. Non sunt, nobis minus enim quis voluptatibus aperiam ut ad exercitationem dignissimos tenetur cupiditate doloribus harum, laudantium cum maxime optio id. Consequuntur consequatur atque ea asperiores excepturi nisi accusantium a optio explicabo ipsam omnis, labore, consectetur blanditiis doloremque, magni quasi perspiciatis fugiat natus doloribus sit. Dolor vero reprehenderit culpa rem officia voluptatum molestias cumque enim, est nemo aperiam libero tempore consequuntur officiis adipisci iste aspernatur eum possimus eos provident praesentium repellat temporibus voluptas unde. Necessitatibus enim laborum nisi temporibus quia architecto eveniet distinctio. Qui sit delectus cumque alias! Quibusdam consequuntur eius dicta! Velit distinctio libero culpa dolore assumenda doloremque voluptas officiis recusandae numquam, expedita adipisci nobis. Reiciendis rerum eligendi minima deleniti quaerat, atque officia porro! Doloremque officia odio laboriosam debitis veritatis quasi id, ea nulla. Suscipit, recusandae nobis nihil quia esse asperiores ullam velit aut iure amet perspiciatis nostrum nisi reprehenderit cum consequatur necessitatibus saepe, voluptate voluptatum commodi ratione? Iure ipsam eaque, cupiditate nesciunt sed aliquam vel eos odit reiciendis provident ut mollitia explicabo. Vel molestias facilis atque sunt earum animi consequuntur, repudiandae dignissimos quis enim ex sint excepturi officia?"
                            />
                        </div>
                        

                        <div className="col">
                            <CardWithImage cardImage={Image.learningTwo}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "

                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color learning"
                            />

                        </div>

                        <div className="col">
                            <CardWithImage cardImage={Image.learningThree}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color" />

                        </div>

                        <div className="col">
                            <CardWithImage cardImage={Image.learningImage}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color"
                                
                            />
                        </div>
                        

                        <div className="col">
                            <CardWithImage cardImage={Image.learningTwo}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "

                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color learning"
                            />

                        </div>

                        <div className="col">
                            <CardWithImage cardImage={Image.learningThree}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color" />

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default LearningPage;