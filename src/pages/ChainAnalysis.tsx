import { useState } from 'react';
import PrivacyNote from '@/components/PrivacyNote';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ChainAnalysis() {
  const [g1Draft, setG1Draft] = useState('');
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6">Chain Analysis of Problem Behavior</h1>

      <div className="w-full max-w-4xl m-auto mt-8 rounded-lg border border-l-4 border-l-primary bg-white px-4 py-3.5">
        <img
          className="m-0 self-center"
          src="/g1-chain.svg"
        />
      </div>

      <div className="flex max-w-4xl mt-8 m-auto rounded-lg border border-l-primary bg-card px-4 py-3.5">
      <FieldSet className="w-full max-w-2xl">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="g1-1" className="text-md">1. What exactly is the major PROBLEM BEHAVIOR that I am analyzing?</FieldLabel>
          <Textarea
            id="g1-1"
            value={g1Draft}
            onChange={(e) => setG1Draft(e.target.value)}
            placeholder="The major problem behavior that I am analyzing is..."
            rows={5}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="g1-2" className="text-md">2. What prompting event in the environment started me on the chain to my problem behavior? Include what happened right before the urge or thought came into my mind.</FieldLabel>
          <Textarea
            id="g1-2"
            value={g1Draft}
            onChange={(e) => setG1Draft(e.target.value)}
            placeholder="The prompting event in the environment was..."
            rows={5}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="g1-3" className="text-md">3. Describe what things in myself and in my environment made me vulnerable.</FieldLabel>
          <Textarea
            id="g1-3"
            value={g1Draft}
            onChange={(e) => setG1Draft(e.target.value)}
            placeholder="The major PROBLEM BEHAVIOR that I am analyzing is..."
            rows={5}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="g1-5a" className="text-md">5a. What exactly were the consequences in the environment?</FieldLabel>
          <Textarea
            id="g1-5a"
            value={g1Draft}
            onChange={(e) => setG1Draft(e.target.value)}
            placeholder="The major PROBLEM BEHAVIOR that I am analyzing is..."
            rows={5}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="g1-5b" className="text-md">5b. And in myself?</FieldLabel>
          <Textarea
            id="g1-5b"
            value={g1Draft}
            onChange={(e) => setG1Draft(e.target.value)}
            placeholder="The major PROBLEM BEHAVIOR that I am analyzing is..."
            rows={5}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="g1-5c" className="text-md">5c. What harm did my problem behavior cause?</FieldLabel>
          <Textarea
            id="g1-5c"
            value={g1Draft}
            onChange={(e) => setG1Draft(e.target.value)}
            placeholder="The major PROBLEM BEHAVIOR that I am analyzing is..."
            rows={5}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
    </div>
    <PrivacyNote />
    </section>
  );
}