import React from 'react';
import styled from "styled-components";
import styles from "../../styles/styles.module.css";




const Modal = (props) => {
	if(!props.show) {
		return null
	}

	return (
		<div >
			<div className="modal-content">
				<div className="modal-header">
					<h4>Minting Menu</h4>
				</div>
				<div className="modal-body">
					<div>
						<h4>Who's the NFT for?</h4>
						<input type="radio" id="self" name="nftDest" value="self" />
						<label for="self">Me!</label>
						<input type="radio" id="likers" name="nftDest" value="likers"/>
						<label for="likers">Likers</label>
						<input type="radio" id="followers" name="nftDest" value="followers"/>
						<label for="followers">Followers</label>
					</div>
					<div>
						<h4>How many NFTs?</h4>
						<input placeholder="a lot!" type="text"/>
					</div>
					<div>
						<h4>Feeling wild? Make it random!</h4>
						<input type="radio" id="yes" name="random" value="yes" />
						<label for="yes">Yes</label>
						<input type="radio" id="no" name="random" value="no"/>
						<label for="no">No</label>
					</div>
				</div>
				<div className="modal-footer">
					<button onClick={props.onClose} className="button">Close</button>
				</div>
			</div>
		</div>
		)

}


export default Modal;