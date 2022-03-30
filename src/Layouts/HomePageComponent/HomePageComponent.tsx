import React from 'react';
import './HomePageComponent.scss';

const HomePageComponent: React.FC = (): JSX.Element => {

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [notes, setNotes] = React.useState<any>([]);
  
  React.useEffect ( () => {
    console.log(notes);
    
  }, [notes])
  

  const onChangeHandler = (event: any) => {
    const { name, value } = event.target;
    const title = 'title';

    if ( name === title  ) {
      setTitle(value);
    } else {
        setDescription(value);
    }

  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    const newNotes: any = {title, description, completed: false};
    setNotes((prevState: any) =>[...prevState, newNotes]);

    setTitle('');
    setDescription('');

  }

  return (
    <section className='home'>
      <header className="home__header">
        Notes Application
      </header>
      <main className="home__body">

        <ul className="home__menu">
          { 
            notes.map(( item: any ) => {
              return (
                <li key={item.title}>{item.title}</li>
              )
            })
          }
        </ul>

      </main>
      <footer className="home__footer">

        <form onSubmit={ submitHandler }>
          <section className="home__block">
            <label htmlFor="title">Title</label>
            <input type="text" name='title' onChange={onChangeHandler} value={title} />
          </section>

          <section className="home__block">
            <label htmlFor="title">Description</label>
            <input type="text" name='description' onChange={onChangeHandler} value={description} />
          </section>
         
          <button type='submit'>Create</button>
        </form>

      </footer>

    </section>
  )
}

export { HomePageComponent };
