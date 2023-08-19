import React from 'react'
import PurchaseForm from '../components/purchase/PurchaseForm'
const Purchase = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-2xl font-semibold mb-6">
        Enter details
      </h1>
      <div className="max-w-xl w-full">
        <PurchaseForm />
      </div>

    </div>
  </section>
  )
}

export default Purchase