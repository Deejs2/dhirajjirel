import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faBriefcase, faCode, faComments, faEnvelope, faMinus, faPaperPlane, faProjectDiagram, faRobot, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface PredefinedMessage {
  text: string;
  message: string;
  icon: any;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;

  userMessage: string = '';
  messages: Message[] = [];
  isOpen: boolean = false;
  isTyping: boolean = false;
  hasNewMessages: boolean = false;
  unreadCount: number = 0;
  i: number = 0;

  // Font Awesome icons 
  faRobot = faRobot;
  faTimes = faTimes;
  faPaperPlane = faPaperPlane;
  faComments = faComments;
  faMinus = faMinus;


  predefinedMessages: PredefinedMessage[] = [
    { text: 'Skills & Tech Stack', message: 'What are your technical skills and expertise?', icon: faCode },
    { text: 'Projects', message: 'Can you show me some of your notable projects?', icon: faProjectDiagram },
    { text: 'Experience', message: 'Tell me about your work experience and background.', icon: faBriefcase },
    { text: 'Contact Info', message: 'How can I get in touch with you?', icon: faEnvelope }
  ];

  quickActions = [
    { text: 'More details', message: 'Can you provide more details about that?' },
    { text: 'Other projects', message: 'What other projects have you worked on?' },
    { text: 'GitHub', message: 'Do you have a GitHub profile I can check out?' }
  ];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    // Add initial bot introduction message
    setTimeout(() => {
      this.addBotMessage("👋 Hi! I'm DhirajBot your Portfolio Assistant.");
    }, 1000);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.hasNewMessages = false;
      this.unreadCount = 0;
      // Focus input when opening
      setTimeout(() => {
        if (this.messageInput) {
          this.messageInput.nativeElement.focus();
        }
      }, 300);
    }
  }

  sendMessage() {
    if (!this.userMessage.trim() || this.isTyping) return;

    const message = this.userMessage.trim();
    this.addUserMessage(message);
    this.userMessage = '';
    this.sendToBot(message);
  }

  sendPredefinedMessage(predefined: PredefinedMessage) {
    this.addUserMessage(predefined.message);
    this.sendToBot(predefined.message);
  }

  sendQuickMessage(message: string) {
    this.addUserMessage(message);
    this.sendToBot(message);
  }

  private addUserMessage(content: string) {
    this.messages.push({
      content,
      isUser: true,
      timestamp: new Date()
    });
  }

  private addBotMessage(content: string) {
    this.messages.push({
      content,
      isUser: false,
      timestamp: new Date()
    });

    if (!this.isOpen) {
      this.hasNewMessages = true;
      this.unreadCount++;
    }
  }

  private sendToBot(message: string) {
    this.isTyping = true;

    // Simulate typing delay
    setTimeout(() => {
      this.chatbotService.sendMessage(message).subscribe({
        next: (response) => {
          this.isTyping = false;
          this.addBotMessage(response);
        },
        error: (error) => {
          this.isTyping = false;
          console.error('Error:', error);
          this.addBotMessage('I apologize, but I\'m having trouble responding right now. Please try again in a moment.');
        }
      });
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      try {
        const element = this.messagesContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      } catch (err) {
        console.error('Could not scroll to bottom:', err);
      }
    }
  }

  trackByMessage(index: number, message: Message): string {
    return `${message.timestamp.getTime()}-${message.isUser}`;
  }

  formatTime(timestamp: Date): string {
    return timestamp.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  formatMessage(content: string): string {
    // Basic message formatting - you can expand this
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
      .replace(/`(.*?)`/g, '<code>$1</code>') // Inline code
      .replace(/\n/g, '<br>'); // Line breaks
  }
}