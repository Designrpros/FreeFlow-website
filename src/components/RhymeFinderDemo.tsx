// app/components/RhymeFinderDemo.tsx
'use client';

import { useState } from 'react';
import styled from 'styled-components';

// --- Styled Components ---
const DemoContainer = styled.section`
  width: 100%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const RhymeChip = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

// --- TypeScript Type for API Response ---
interface Rhyme {
  word: string;
  score: number;
  numSyllables: number;
}

// --- Component ---
export default function RhymeFinderDemo() {
  const [word, setWord] = useState<string>('');
  const [rhymes, setRhymes] = useState<Rhyme[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const findRhymes = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!word) return;

    setIsLoading(true);
    setRhymes([]);
    
    try {
      const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}&md=s`);
      const data: Rhyme[] = await response.json();
      setRhymes(data);
    } catch (error) {
      console.error("Failed to fetch rhymes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DemoContainer>
      <h2>Try the Rhyme Finder</h2>
      <p style={{ color: '#aaa', margin: '0.5rem 0 1.5rem 0' }}>
        Experience one of Free Flow's core features, right here.
      </p>
      <SearchForm onSubmit={findRhymes}>
        <Input 
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word..."
        />
        <SubmitButton type="submit">Find Rhymes</SubmitButton>
      </SearchForm>
      {isLoading && <p>Finding rhymes...</p>}
      {!isLoading && rhymes.length > 0 && (
        <ResultsGrid>
          {rhymes.map(rhyme => (
            <RhymeChip key={rhyme.word}>{rhyme.word}</RhymeChip>
          ))}
        </ResultsGrid>
      )}
    </DemoContainer>
  );
}