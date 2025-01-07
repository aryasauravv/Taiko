import React from 'react';

const Terminal = () => {
  const asciiArt = `
███    ███ ██ ███████ ██    ██ ██   ██ ██ 
████  ████ ██    ███  ██    ██ ██  ██  ██ 
██ ████ ██ ██   ███   ██    ██ █████   ██ 
██  ██  ██ ██  ███    ██    ██ ██  ██  ██ 
██      ██ ██ ███████  ██████  ██   ██ ██ 
`;

  const commands = [
    { cmd: 'ls', desc: 'List directory contents' },
    { cmd: 'cd [dir]', desc: 'Change directory (Examples: cd folder, cd /path/to/folder' },
    { cmd: 'pwd', desc: 'Display current directory' },
    { cmd: 'run [file]', desc: 'Execute/display file contents' },
    { cmd: 'clear', desc: 'Clear terminal display' },
    { cmd: 'chat', desc: 'Enter AI chat mode' },
  ];

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-sm animate-glitch">mizuki@system: ~</div>
        </div>
        <div className="terminal-body">
          <pre className="ascii-art mb-4">{asciiArt}</pre>
          <div className="border-t border-b border-dashed border-terminal-green my-4 py-4 animate-glitch">
            [SYNAPTECH DYNAMICS CORP.] [BUILD: 2.3.4513214] [ACCESS LEVEL: ROOT]
          </div>
          <p className="mb-4 animate-glitch">Welcome to Project MIZUKI. Type 'help' for available commands.</p>
          <div className="mb-4">
            <p className="animate-glitch mb-2">AVAILABLE COMMANDS:</p>
            {commands.map((cmd, index) => (
              <div key={index} className="terminal-prompt">
                <span className="w-20 inline-block animate-glitch">{cmd.cmd}</span>
                <span className="text-terminal-green">: {cmd.desc}</span>
              </div>
            ))}
          </div>
          <div className="terminal-prompt">
            <span className="animate-glitch">mizuki@system:~$</span>
            <span className="animate-flicker">▊</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;