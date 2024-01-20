import { useState } from 'react';
import "./paragraph.css"
const ParagraphGenerator = () => {
    const [wordLength, setWordLength] = useState(5);
    const [paragraph, setParagraph] = useState('');

    const generateParagraph = () => {
        const words = [
            'I', 'am', 'a', 'good', 'software', 'developer', 'with', 'experience',
            'in', 'web', 'development', 'React', 'JavaScript', 'HTML', 'CSS',
            'and', 'passionate', 'about', 'creating', 'user-friendly', 'interfaces',
            'for', 'modern', 'applications', 'I', 'enjoy', 'learning', 'new', 'technologies',
            'and', 'solving', 'challenging', 'problems', 'in', 'the', 'software', 'industry',
        ];

        let generatedParagraph = '';
        for (let i = 0; i < wordLength; i++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            generatedParagraph += words[randomIndex];
            if (i < wordLength - 1) {
                generatedParagraph += ' ';
            }
        }
        setParagraph(generatedParagraph);
    };

    return (
        <div>
            <label>
                Word Length:
                <input
                    type="number"
                    value={wordLength}
                    onChange={(e) => setWordLength(parseInt(e.target.value))}
                />
            </label>
            <button onClick={generateParagraph}>Generate Paragraph</button>
            <p>{paragraph}</p>
        </div>
    );
};

export default ParagraphGenerator;
