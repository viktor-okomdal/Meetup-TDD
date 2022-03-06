export interface Event {
  id: string;
  name: string;
  description: string;
  time: string;
  date: string;
  attendeces: string[];
  image: string;
  comments: string[];

};

export interface EventProps {
  event: Event;
}