// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteEventsByEventTypeRequest, DeleteEventsByEventTypeResult } from "../models/models_0";
import { de_DeleteEventsByEventTypeCommand, se_DeleteEventsByEventTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventsByEventTypeCommand}.
 */
export interface DeleteEventsByEventTypeCommandInput extends DeleteEventsByEventTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventsByEventTypeCommand}.
 */
export interface DeleteEventsByEventTypeCommandOutput extends DeleteEventsByEventTypeResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes all events of a particular event type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEventsByEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEventsByEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteEventsByEventTypeRequest
 *   eventTypeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventsByEventTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventsByEventTypeResult
 * //   eventTypeName: "STRING_VALUE",
 * //   eventsDeletionStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteEventsByEventTypeCommandInput - {@link DeleteEventsByEventTypeCommandInput}
 * @returns {@link DeleteEventsByEventTypeCommandOutput}
 * @see {@link DeleteEventsByEventTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteEventsByEventTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 */
export class DeleteEventsByEventTypeCommand extends $Command<
  DeleteEventsByEventTypeCommandInput,
  DeleteEventsByEventTypeCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteEventsByEventTypeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEventsByEventTypeCommandInput, DeleteEventsByEventTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEventsByEventTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteEventsByEventTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "DeleteEventsByEventType",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteEventsByEventTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteEventsByEventTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventsByEventTypeCommandOutput> {
    return de_DeleteEventsByEventTypeCommand(output, context);
  }
}
