import React from "react";
import ReactDOM from "react-dom";
import style from './iframe.css'
import classnames from 'classnames'
 
class IFrame extends React.Component {
	constructor(props){
			super(props)
	}
	render(){
		return(
			<div id={style.contentParent} className={style.responsive_columns_wrapper}>
      <div id={style.chat_column_holder} className={style.content_column}>
        <div className={classnames(`${style.chat_column}`, `${style.show}`)}>

          <div className="chat-header">
            <div className="chat-header-title">
							Fred Virtual Assistant
						</div>

            <div className="chat-header-controls">
							<div className="btn-close" 
							// onclick="ConversationPanel.close()"
							>
								{/* <img src="./icons/reload.png" width="18px" /> */}
							</div>
              <div className="btn-minimize"
							//  onclick="ConversationPanel.toggle()"
							 >
                {/* <img src="./icons/min.png" width="22px" /> */}
              </div>
              <div className="btn-close" 
							//  onclick="ConversationPanel.close()"
							 >
                {/* <img src="./icons/close.png" width="18px" /> */}
              </div>
            </div>
          </div>
          <div className="chat-body">
            <div id="scrollingChat">

							 <iframe id="form_singleDonation"
									className="form_singleDonation_hide"
									src="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E910252QF&id=49">
							</iframe> 

						</div>
          </div>

          <div className="chat-footer">
            <form 
						// onSubmit="ConversationPanel.submit(event)"
						 className="chat-form">
              <span
                className="btn-info rounded-circle mx-1"
                data-toggle="modal"
                data-target="#infoModal"
              >
                {/* <img src="./icons/icons8-info.svg" width="50px" alt="info" /> */}
              </span>

              <label  className="inputLabel inputOutline mb-0">
                <input
                  id="textInput"
                  className="input responsive-column"
                  placeholder="What's your request?"
                  type="text"
                  // onKeyDown="ConversationPanel.inputKeyDown(event, this)"
                />
              </label>
              <button type="submit" className="inputOutline btn align-self-center">
                {/* <img src="img/send.png" height="32px" /> */}
              </button>
              <button
                type="button"
                className="inputOutline btn btn-reset align-self-center"
                // onClick="ConversationPanel.reset()"
              >
                {/* <img src="img/return.png" height="32px" /> */}
              </button>
            </form>
          </div>
        </div>
      </div>


    </div>
		)
	}
};


export default IFrame;