import React from 'react';

const Main = () => {
    return (
        <div className="main__item">
            <div >
                <img className="main__headerImg" src="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background.jpg"/>
            </div>
            <div className="main__avatarAndDescription">
                <img className="main__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuppnaEu0RmaG8sMGkJwE0VYzGVkcn2jJJhio2lf1uyckLEqGdWTSiLkqxcLo6fHqY_PU&usqp=CAU"/>
                <span className="main__description" >Description</span>
            </div>
            <div className="main__myPosts" >My Posts</div>
            <div className="main__newPosts" >New Posts</div>
            <div className="main__firstPost">First post</div>
            <div className="main__secondPost">Second post</div>
        </div>
    );
};

export default Main;