export const ShareSessionAndFeedback = () => {
  return (
    <div className="w-full px-0 md:px-6 flex-col items-start justify-start lg:w-3/12 flex py-4 mb-16 lg:mb-0 space-y-5">
      <a className="btn-accent" href="#1">
        share <i className="fa fa-share" />
      </a>
      <button type="button" className="btn-primary">
        Session Feedback{' '}
        <i className="fa fa-send" style={{ transform: 'rotate(55deg)' }} />
      </button>
    </div>
  )
}
