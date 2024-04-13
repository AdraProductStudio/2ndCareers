import React from "react";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import CardWithImage from "../../components/Cards/CardWithImage";
import Image from '../../utils/images.js'

const CommunityPage = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']

    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <div className="community-page-height community-page-bg overflow-scroll">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-0 mb-4">
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary"
                                modalContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius impedit magnam inventore asperiores! Soluta ex magnam impedit mollitia quas eius magni animi suscipit! Odit perferendis cumque, maiores sed beatae placeat, fugiat voluptatum amet aliquid culpa veniam vitae accusamus. Iure similique delectus ducimus dolor reprehenderit, itaque sunt quos sequi odit? Vitae mollitia aliquam voluptatum rerum molestiae consectetur laudantium error deleniti quam quidem ullam, temporibus corrupti eligendi dolorum voluptas! Voluptas libero, exercitationem saepe reiciendis harum eius veritatis quasi. Quaerat vitae atque possimus dignissimos. Id molestiae qui autem dicta dolorem. Quas fuga numquam modi maiores, magnam asperiores nobis quidem consequatur dolore ad eum nisi aut deleniti aperiam animi sed. Natus quisquam corporis modi reiciendis repellat! Doloremque facere culpa ipsam quisquam. Ipsam dolore labore quo suscipit inventore repudiandae, voluptate aperiam reprehenderit rerum tempora necessitatibus fugiat nulla quis iste. Quasi, esse. Aut, quisquam provident vero perspiciatis vitae cumque laborum magni dignissimos veniam repellendus exercitationem autem neque, ad fuga amet! Commodi veniam voluptatum cum, autem nulla esse iste rem, tenetur ad, inventore molestias laborum eligendi neque iusto. Necessitatibus, facere. Quae non deleniti unde exercitationem adipisci eos consectetur modi architecto repellat, rerum voluptate repudiandae aspernatur soluta perspiciatis odio eius. Veniam sequi maxime non voluptatem porro cumque omnis nihil officia dolores itaque optio sapiente libero dignissimos, voluptas corporis nisi facere laudantium nulla culpa adipisci saepe molestiae quos a natus? Voluptates nisi pariatur ea officia natus doloribus laudantium eius in facilis necessitatibus dolor minima commodi eligendi quidem, mollitia amet consequuntur! Quidem culpa natus beatae illo aliquid animi pariatur quis necessitatibus eum reprehenderit totam, rerum a minus numquam enim asperiores aspernatur doloremque quod quisquam temporibus. Voluptatum, est pariatur eius molestias error similique, iste placeat asperiores excepturi atque obcaecati ratione ad necessitatibus amet quod quos nemo dolore sequi beatae dolorem! Error in, sit deserunt aliquid ut nihil officiis placeat quae dolor?" /> 
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary"
                            />

                        </div>

                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityPage