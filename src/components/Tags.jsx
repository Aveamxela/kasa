import React from 'react';

const Tags = ({tags}) => {

    const displayTags = () => {
        // Création d'un élément div pour chaque tag
        return tags.map((tag, index) => (
            <div key={index} className="tag">
                {tag}
            </div>
        ));
    };

    return (
        <div className='tags'>
            {displayTags()}
        </div>
    );
};

export default Tags;