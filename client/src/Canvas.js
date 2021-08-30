import React, { useRef, useEffect } from 'react'

const Canvas = props => {

	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		//Our first draw
		context.strokeStyle = '#662483';
		context.lineWidth = 18;
		context.strokeRect(0, 0, context.canvas.width, context.canvas.height);
		context.font = '30.0px serif';

		context.fillStyle = '#662483';
		context.fillText("This is to certify that", 217,262)

		context.font = '20.0px serif';
		context.fillStyle = '#000000';

		context.fillText("Student", 200, 388);
		context.fillText("ID", 200, 418);
		context.fillText(props.profile.name, 304, 388);
		context.fillText(props.profile.sis_user_id, 304, 418);

		context.font = '30.0px serif';
		context.fillStyle = '#662483';
		context.fillText("has successfully completed the", 147, 511);
		context.fillText("UTS Consent Matters subject.", 160, 542);

		context.font = '20.0px serif';
		context.fillStyle = '#000000';

		context.fillText("Date", 320, 868);
		context.fillText(new Date().toLocaleDateString(), 440, 868);

		const rna = new Image();
		rna.src = "./cert-assets/rna.png";
		rna.onload = function() {
			context.drawImage(rna, 282, 80, 135, 114);
		};

		const logos = new Image();
		logos.src = "./cert-assets/logos.png";
		logos.onload = function() {
			context.drawImage(logos, 90, 691, 510, 52);
		};
	}, [])

	return <canvas ref={canvasRef} {...props} />
}

export default Canvas;