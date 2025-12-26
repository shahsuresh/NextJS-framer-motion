"use client";
import React from "react";
import { motion, useScroll } from "motion/react";

const page = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <div className='font-mono px-20 py-5 text-center '>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='w-full h-3 rounded-2xl origin-left bg-yellow-300 fixed left-0 top-10'
      ></motion.div>
      <h1 className='text-3xl pb-5 font-bold '>
        Scroll Animation in this page
      </h1>
      <p>
        Scrolling is a quiet, almost invisible action that has become one of the
        defining gestures of modern life. With a simple flick of a finger or
        roll of a wheel, we move through endless streams of information, images,
        and stories, compressing vast amounts of human thought into a continuous
        vertical flow. Scrolling changes how we read and perceive content:
        instead of pausing on a single page, we skim, glance, and decide in
        seconds what deserves our attention. This behavior encourages speed and
        convenience, but it also reshapes patience and focus, often favoring
        short, visually engaging pieces over long, reflective ones. At the same
        time, scrolling creates a sense of continuity and discovery, allowing
        users to explore news, social connections, learning resources, and
        entertainment without clear boundaries or stopping points. It can feel
        empowering, giving instant access to global perspectives, yet it can
        also become repetitive and exhausting, as the stream rarely ends. In
        this way, scrolling is more than a technical feature of screens; it is a
        cultural habit that influences how we think, communicate, and experience
        time in the digital age.
      </p>
      <br /> <br />
      <p>
        Scrolling has become a modern rhythm, a steady movement that mirrors the
        pace of contemporary life. It is an action so familiar that it often
        goes unnoticed, yet it shapes how we absorb information and interact
        with the world. As we scroll, content rises and disappears, replaced
        instantly by something new, creating a sense of constant motion and
        change. This flow can be stimulating, offering variety and surprise, but
        it can also fragment attention, making it harder to linger on a single
        idea or emotion. Scrolling encourages consumption over contemplation,
        rewarding novelty and speed while quietly discouraging depth. Still, it
        serves an important purpose, allowing people to navigate large amounts
        of content efficiently and to feel connected across distances. In its
        simplicity, scrolling reflects a broader human desire: to keep moving
        forward, searching for meaning, relevance, or connection in an
        ever-expanding digital landscape.
      </p>
      <br /> <br />
      <p>
        Scrolling is a quiet, almost invisible action that has become one of the
        defining gestures of modern life. With a simple flick of a finger or
        roll of a wheel, we move through endless streams of information, images,
        and stories, compressing vast amounts of human thought into a continuous
        vertical flow. Scrolling changes how we read and perceive content:
        instead of pausing on a single page, we skim, glance, and decide in
        seconds what deserves our attention. This behavior encourages speed and
        convenience, but it also reshapes patience and focus, often favoring
        short, visually engaging pieces over long, reflective ones. At the same
        time, scrolling creates a sense of continuity and discovery, allowing
        users to explore news, social connections, learning resources, and
        entertainment without clear boundaries or stopping points. It can feel
        empowering, giving instant access to global perspectives, yet it can
        also become repetitive and exhausting, as the stream rarely ends. In
        this way, scrolling is more than a technical feature of screens; it is a
        cultural habit that influences how we think, communicate, and experience
        time in the digital age.
      </p>
      <p>
        Scrolling is a quiet, almost invisible action that has become one of the
        defining gestures of modern life. With a simple flick of a finger or
        roll of a wheel, we move through endless streams of information, images,
        and stories, compressing vast amounts of human thought into a continuous
        vertical flow. Scrolling changes how we read and perceive content:
        instead of pausing on a single page, we skim, glance, and decide in
        seconds what deserves our attention. This behavior encourages speed and
        convenience, but it also reshapes patience and focus, often favoring
        short, visually engaging pieces over long, reflective ones. At the same
        time, scrolling creates a sense of continuity and discovery, allowing
        users to explore news, social connections, learning resources, and
        entertainment without clear boundaries or stopping points. It can feel
        empowering, giving instant access to global perspectives, yet it can
        also become repetitive and exhausting, as the stream rarely ends. In
        this way, scrolling is more than a technical feature of screens; it is a
        cultural habit that influences how we think, communicate, and experience
        time in the digital age.
      </p>
      <br /> <br />
      <p>
        Scrolling has become a modern rhythm, a steady movement that mirrors the
        pace of contemporary life. It is an action so familiar that it often
        goes unnoticed, yet it shapes how we absorb information and interact
        with the world. As we scroll, content rises and disappears, replaced
        instantly by something new, creating a sense of constant motion and
        change. This flow can be stimulating, offering variety and surprise, but
        it can also fragment attention, making it harder to linger on a single
        idea or emotion. Scrolling encourages consumption over contemplation,
        rewarding novelty and speed while quietly discouraging depth. Still, it
        serves an important purpose, allowing people to navigate large amounts
        of content efficiently and to feel connected across distances. In its
        simplicity, scrolling reflects a broader human desire: to keep moving
        forward, searching for meaning, relevance, or connection in an
        ever-expanding digital landscape.
      </p>
      <br /> <br />
      <p>
        Scrolling is a quiet, almost invisible action that has become one of the
        defining gestures of modern life. With a simple flick of a finger or
        roll of a wheel, we move through endless streams of information, images,
        and stories, compressing vast amounts of human thought into a continuous
        vertical flow. Scrolling changes how we read and perceive content:
        instead of pausing on a single page, we skim, glance, and decide in
        seconds what deserves our attention. This behavior encourages speed and
        convenience, but it also reshapes patience and focus, often favoring
        short, visually engaging pieces over long, reflective ones. At the same
        time, scrolling creates a sense of continuity and discovery, allowing
        users to explore news, social connections, learning resources, and
        entertainment without clear boundaries or stopping points. It can feel
        empowering, giving instant access to global perspectives, yet it can
        also become repetitive and exhausting, as the stream rarely ends. In
        this way, scrolling is more than a technical feature of screens; it is a
        cultural habit that influences how we think, communicate, and experience
        time in the digital age.
      </p>
      <p>
        Scrolling is a quiet, almost invisible action that has become one of the
        defining gestures of modern life. With a simple flick of a finger or
        roll of a wheel, we move through endless streams of information, images,
        and stories, compressing vast amounts of human thought into a continuous
        vertical flow. Scrolling changes how we read and perceive content:
        instead of pausing on a single page, we skim, glance, and decide in
        seconds what deserves our attention. This behavior encourages speed and
        convenience, but it also reshapes patience and focus, often favoring
        short, visually engaging pieces over long, reflective ones. At the same
        time, scrolling creates a sense of continuity and discovery, allowing
        users to explore news, social connections, learning resources, and
        entertainment without clear boundaries or stopping points. It can feel
        empowering, giving instant access to global perspectives, yet it can
        also become repetitive and exhausting, as the stream rarely ends. In
        this way, scrolling is more than a technical feature of screens; it is a
        cultural habit that influences how we think, communicate, and experience
        time in the digital age.
      </p>
      <br /> <br />
      <p>
        Scrolling has become a modern rhythm, a steady movement that mirrors the
        pace of contemporary life. It is an action so familiar that it often
        goes unnoticed, yet it shapes how we absorb information and interact
        with the world. As we scroll, content rises and disappears, replaced
        instantly by something new, creating a sense of constant motion and
        change. This flow can be stimulating, offering variety and surprise, but
        it can also fragment attention, making it harder to linger on a single
        idea or emotion. Scrolling encourages consumption over contemplation,
        rewarding novelty and speed while quietly discouraging depth. Still, it
        serves an important purpose, allowing people to navigate large amounts
        of content efficiently and to feel connected across distances. In its
        simplicity, scrolling reflects a broader human desire: to keep moving
        forward, searching for meaning, relevance, or connection in an
        ever-expanding digital landscape.
      </p>
      <br /> <br />
      <p>
        Scrolling is a quiet, almost invisible action that has become one of the
        defining gestures of modern life. With a simple flick of a finger or
        roll of a wheel, we move through endless streams of information, images,
        and stories, compressing vast amounts of human thought into a continuous
        vertical flow. Scrolling changes how we read and perceive content:
        instead of pausing on a single page, we skim, glance, and decide in
        seconds what deserves our attention. This behavior encourages speed and
        convenience, but it also reshapes patience and focus, often favoring
        short, visually engaging pieces over long, reflective ones. At the same
        time, scrolling creates a sense of continuity and discovery, allowing
        users to explore news, social connections, learning resources, and
        entertainment without clear boundaries or stopping points. It can feel
        empowering, giving instant access to global perspectives, yet it can
        also become repetitive and exhausting, as the stream rarely ends. In
        this way, scrolling is more than a technical feature of screens; it is a
        cultural habit that influences how we think, communicate, and experience
        time in the digital age.
      </p>
    </div>
  );
};

export default page;
