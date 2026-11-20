import { describe, expect, it } from 'vitest'
import { FeedbackQuestion } from '../types/types'
import { answersToSend, untickedRequired } from './feedback'

describe('answersToSend', () => {
  const q = (id: string, type: FeedbackQuestion['type'], required = false) =>
    ({ id, label: id, type, options: null, required }) as FeedbackQuestion

  it('leaves out unanswered, emptied and unticked questions', () => {
    const questions = [
      q('a', 'text'),
      q('b', 'text'),
      q('c', 'multi'),
      q('d', 'choice'),
    ]
    expect(answersToSend(questions, { b: '', c: [] })).toEqual({})
  })

  it('keeps answered ones, including a scale of 0 and ticked lists', () => {
    const questions = [q('a', 'scale'), q('b', 'multi'), q('c', 'text')]
    expect(answersToSend(questions, { a: 0, b: ['x'], c: 'hi' })).toEqual({
      a: 0,
      b: ['x'],
      c: 'hi',
    })
  })

  it('ignores answers to questions that are no longer asked', () => {
    expect(answersToSend([q('a', 'text')], { gone: 'x' })).toEqual({})
  })
})

describe('untickedRequired', () => {
  const q = (id: string, type: FeedbackQuestion['type'], required: boolean) =>
    ({ id, label: id, type, options: ['x'], required }) as FeedbackQuestion

  it('flags a required list with nothing ticked', () => {
    const questions = [q('a', 'multi', true), q('b', 'multi', false)]
    expect(untickedRequired(questions, {}).map((x) => x.id)).toEqual(['a'])
  })

  it('passes once one is ticked', () => {
    expect(untickedRequired([q('a', 'multi', true)], { a: ['x'] })).toEqual([])
  })

  it('leaves other required types to the server', () => {
    expect(untickedRequired([q('a', 'choice', true)], {})).toEqual([])
  })
})
