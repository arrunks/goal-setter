import React,{useState, useEffect} from 'react';
import style from './style.css'

const quotes = [
    '“If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes.” —Andrew Carnegie',
    '“All who have accomplished great things have had a great aim, have fixed their gaze on a goal which was high, one which sometimes seemed impossible.” —Orison Swett Marden',
    '“Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success.” —Pablo Picasso',
    '“Success is the progressive realization of a worthy goal or ideal.” —Earl Nightingale',
    '“You have to set goals that are almost out of reach. If you set a goal that is attainable without much work or thought, you are stuck with something below your true talent and potential.” —Steve Garvey',
    'By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands—your own.” —Mark Victor Hansen',
    ' “The trouble with not having a goal is that you can spend your life running up and down the field and never score.” —Bill Copeland',
    '“One way to keep momentum going is to have constantly greater goals.” —Michael Korda',
    '“All successful people have a goal. No one can get anywhere unless he knows where he wants to go and what he wants to be or do. ” —Norman Vincent Peale',
    '“Goals. There’s no telling what you can do when you get inspired by them. There’s no telling what you can do when you believe in them. And there’s no telling what will happen when you act upon them.” —Jim Rohn',
    '“A goal properly set is halfway reached.” —Zig Ziglar',
    '“If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you.” —Les Brown',
    '“I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.” —Michael Phelps',
    '“You can do anything if you set goals. You just have to push yourself.” —RJ Mitte',
    ' “It’s important to set your own goals and work hard to achieve them.” —Yuichiro Miura',
    '“You should set goals beyond your reach so you always have something to live for.” —Ted Turner',
    ' “It must be borne in mind that the tragedy of life doesn’t lie in not reaching your goal. The tragedy lies in having no goals to reach.” —Benjamin E. Mays',
    '“The thing about goals is that living without them is a lot more fun, in the short run. It seems to me, though, that the people who get things done, who lead, who grow and who make an impact… those people have goals.” —Seth Godin',
]

export const Motivation = () => {
    const index = Math.floor(Math.random() * quotes.length);  
    const [quote,setQuote] = useState(quotes[index]);

    return (
        <p className={style.quoteText}>{quote}</p>
    )
}
