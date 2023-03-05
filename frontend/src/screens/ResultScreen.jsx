import React from 'react'
import { Link } from 'react-router-dom'

export default function ResultScreen() {
  return (
    <div>
      <div class="flex justify-center">
        <div
          class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
          <h5
            class="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            You Scored
          </h5>
          <div class="mb-4 text-2xl flex justify-center text-neutral-600 dark:text-neutral-200">
            {localStorage.getItem('score') ? localStorage.getItem('score') : 0} / 10
          </div>
          <div class='flex justify-center '>
            <Link to={'/quiz/answers'}>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Show Answers
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
