const Sidebar = () => {
	return (
		<div className="fixed top-1/10 right-0 z-50">
			<ul className="space-y-8 group">
				{/* Call */}
				<li className=" flex items-center justify-end p-2 bg-dark-green text-foreground font-bold cursor-pointer rounded-l-full hover:bg-primary">
					{/* This span will only show on hover */}
					<span className="hidden group-hover:block mr-2 transition-all duration-400">
						+251911258624
					</span>
					<div className="w-10 h-10 bg-golden-yellow  flex items-center justify-center rounded-full">
						<img
							src="/assets/phone-svgrepo-com.svg"
							alt="Call"
							className="w-6 h-6"
						/>
					</div>
				</li>
				{/* Text */}
				<li className=" flex items-center justify-end p-2 bg-dark-green  text-foreground font-bold cursor-pointer rounded-l-full hover:bg-primary">
					{/* This span will only show on hover */}
					<span className="hidden group-hover:block mr-2 transition-all duration-400">
						pazengineering1@gmail.com
					</span>
					<div className="w-10 h-10 bg-golden-yellow  flex items-center justify-center rounded-full">
						<img
							src="/assets/message-square-dots-svgrepo-com.svg"
							alt="Message"
							className="w-6 h-6"
						/>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
