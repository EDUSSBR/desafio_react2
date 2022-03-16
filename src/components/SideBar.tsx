import { Button } from "./Button"

type SideBarProps = {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[],
  handleClickButton: any,
  selectedGenreId: number
} 

export function SideBar({genres, handleClickButton, selectedGenreId}:SideBarProps) {
  return(
  <>
  <span>Watch<p>Me</p></span>
  <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id} />
      ))}
  </div>
    </>)
}