import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import PrivacyNote from '@/components/PrivacyNote';

interface Note {
  id: string;
  title: string;
  text: string;
  imageUrl?: string;
  createdAt: number;
}

export default function Home() {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);
  const [titleDraft, setTitleDraft] = useState('');
  const [textDraft, setTextDraft] = useState('');

  function addNote() {
    const title = titleDraft.trim();
    const text = textDraft.trim();
    if (!title || !text) return;

    setNotes((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        text,
        createdAt: Date.now(),
      },
    ]);

    setTitleDraft('');
    setTextDraft('');
  }

  function removeNote(id: string) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6">Home: Notes to Self</h1>

      <Card className="mb-8 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-base">Create New Note</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input
            value={titleDraft}
            onChange={(e) => setTitleDraft(e.target.value)}
            placeholder="Title"
          />
          <Textarea
            value={textDraft}
            onChange={(e) => setTextDraft(e.target.value)}
            placeholder="Write your note..."
            rows={3}
          />
          {/* <Input
            value={imageDraft}
            onChange={(e) => setImageDraft(e.target.value)}
            placeholder="Image URL (optional)"
          /> */}
        </CardContent>
        <CardFooter>
          <Button onClick={addNote} disabled={!titleDraft.trim() || !textDraft.trim()}>
            Add note
          </Button>
        </CardFooter>
      </Card>

      <div className="flex flex-col gap-4 mx-auto max-w-4xl">
      {notes.length === 0 ? (
        <p className="italic text-muted-foreground mb-8">No notes yet.</p>
      ) : (
        <div className="flex flex-col gap-4 mx-auto max-w-4xl">
          {notes.map((note) => (
            <Card key={note.id}>
              <CardHeader>
                <CardAction className="text-muted-foreground">
                  {new Date(note.createdAt).toLocaleString(undefined, {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </CardAction>
                <CardTitle>{note.title}</CardTitle>
              </CardHeader>
              {/* {note.imageUrl && (
                <div className="px-6">
                  <img
                    src={note.imageUrl}
                    alt=""
                    className="w-full aspect-video object-cover rounded-md border"
                  />
                </div>
              )} */}
              <CardContent>
                <p className="text-sm whitespace-pre-wrap">{note.text}</p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={() => removeNote(note.id)}
                >
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
    <PrivacyNote />
    </section>
  );
}